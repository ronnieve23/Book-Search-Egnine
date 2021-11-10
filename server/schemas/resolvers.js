const {User} = require('../models');
const {AuthenticationError} = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user){
          const userData = await User.findOne({_id : context.user_id})
              .select('-__v -password');

              return userData;
        }
        throw new AuthenticationError('You must be logged in');
      }
    },

    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
      
        return user;
      }
      
    }
  };
  
  module.exports = resolvers;