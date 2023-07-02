const { ApolloServer, gql } = require('apollo-server');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'ijimakindetunde@gmail.com', 
    pass: 'zyeiinnqltkwhjqn' 
  }
});

const typeDefs = gql`
type Query{
  Hello: String!
}
  type Mutation {
    sendEmail( input: EmailInput!): String
  }

  input EmailInput{
    name: String! 
    email: String! 
    message: String!
  }
`;


const resolvers = {
  Mutation: {
    sendEmail: ( _, { input }) => {
     const {name, email, message} = input
      const mailOptions = {
        from: 'ijimakindetunde@gmail.com', // Sender email address (should be the same as the auth user)
        to: 'tundexijim@gmail.com', // Recipient email address
        subject: 'New Email from Contact Form',
        text: `Name: ${name}\n\nEmail: ${email}\n\nMessage: ${message}`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          throw new Error('Failed to send email');
        } else {
          console.log('Email sent:', info.messageId);
        }
      });

      return 'Email sent successfully';
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});