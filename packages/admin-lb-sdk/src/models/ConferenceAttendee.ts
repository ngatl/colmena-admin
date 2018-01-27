/* tslint:disable */
import {
  ConferenceTicket,
  ConferenceAttendeeNote
} from '../index';

declare var Object: any;
export interface ConferenceAttendeeInterface {
  "id": string;
  "email": string;
  "name": string;
  "company"?: string;
  "phone"?: string;
  "tags"?: string;
  "avatar"?: string;
  "realm"?: string;
  "emailVerified"?: boolean;
  "created"?: Date;
  "modified"?: Date;
  accessTokens?: any[];
  roles?: any[];
  tickets?: ConferenceTicket[];
  notes?: ConferenceAttendeeNote[];
}

export class ConferenceAttendee implements ConferenceAttendeeInterface {
  "id": string;
  "email": string;
  "name": string;
  "company": string;
  "phone": string;
  "tags": string;
  "avatar": string;
  "realm": string;
  "emailVerified": boolean;
  "created": Date;
  "modified": Date;
  accessTokens: any[];
  roles: any[];
  tickets: ConferenceTicket[];
  notes: ConferenceAttendeeNote[];
  constructor(data?: ConferenceAttendeeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ConferenceAttendee`.
   */
  public static getModelName() {
    return "ConferenceAttendee";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ConferenceAttendee for dynamic purposes.
  **/
  public static factory(data: ConferenceAttendeeInterface): ConferenceAttendee{
    return new ConferenceAttendee(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'ConferenceAttendee',
      plural: 'ConferenceAttendees',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "company": {
          name: 'company',
          type: 'string'
        },
        "phone": {
          name: 'phone',
          type: 'string'
        },
        "tags": {
          name: 'tags',
          type: 'string'
        },
        "avatar": {
          name: 'avatar',
          type: 'string'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "created": {
          name: 'created',
          type: 'Date'
        },
        "modified": {
          name: 'modified',
          type: 'Date'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: ''
        },
        roles: {
          name: 'roles',
          type: 'any[]',
          model: ''
        },
        tickets: {
          name: 'tickets',
          type: 'ConferenceTicket[]',
          model: 'ConferenceTicket'
        },
        notes: {
          name: 'notes',
          type: 'ConferenceAttendeeNote[]',
          model: 'ConferenceAttendeeNote'
        },
      }
    }
  }
}
