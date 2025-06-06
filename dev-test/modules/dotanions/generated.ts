import * as Types from '../types.js';
import * as gm from 'graphql-modules';
export namespace DotanionsModule {
  interface DefinedFields {
    Paypal: 'id' | 'url';
    CreditCard: 'id' | 'cardNumber' | 'cardOwner';
    Donation: 'id' | 'sender' | 'recipient' | 'amount';
    Mutation: 'donate';
    User: 'paymentOptions';
  }

  interface DefinedInputFields {
    DonationInput: 'user' | 'amount' | 'paymentOption';
  }

  export type Paypal = Pick<Types.Paypal, DefinedFields['Paypal']>;
  export type CreditCard = Pick<Types.CreditCard, DefinedFields['CreditCard']>;
  export type PaymentOption = Types.PaymentOption;
  export type User = Types.User;
  export type Donation = Pick<Types.Donation, DefinedFields['Donation']>;
  export type DonationInput = Pick<Types.DonationInput, DefinedInputFields['DonationInput']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;

  export type PaypalResolvers = Pick<Types.PaypalResolvers, DefinedFields['Paypal'] | '__isTypeOf'>;
  export type CreditCardResolvers = Pick<Types.CreditCardResolvers, DefinedFields['CreditCard'] | '__isTypeOf'>;
  export type DonationResolvers = Pick<Types.DonationResolvers, DefinedFields['Donation'] | '__isTypeOf'>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type UserResolvers = Pick<Types.UserResolvers, DefinedFields['User']>;

  export interface Resolvers {
    Paypal?: PaypalResolvers;
    CreditCard?: CreditCardResolvers;
    Donation?: DonationResolvers;
    Mutation?: MutationResolvers;
    User?: UserResolvers;
  }

  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Paypal?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      url?: gm.Middleware[];
    };
    CreditCard?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      cardNumber?: gm.Middleware[];
      cardOwner?: gm.Middleware[];
    };
    User?: {
      '*'?: gm.Middleware[];
      paymentOptions?: gm.Middleware[];
    };
    Donation?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      sender?: gm.Middleware[];
      recipient?: gm.Middleware[];
      amount?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      donate?: gm.Middleware[];
    };
  }
}
