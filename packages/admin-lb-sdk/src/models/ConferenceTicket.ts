/* tslint:disable */
import {
  ConferenceRegistration,
  ConferenceRelease,
  ConferenceAttendee
} from '../index';

declare var Object: any;
export interface ConferenceTicketInterface {
  "id": string;
  "conferenceRegistrationId"?: string;
  "conferenceReleaseId"?: string;
  "conferenceAttendeeId"?: string;
  registration?: ConferenceRegistration;
  release?: ConferenceRelease;
  attendee?: ConferenceAttendee;
}

export class ConferenceTicket implements ConferenceTicketInterface {
  "id": string;
  "conferenceRegistrationId": string;
  "conferenceReleaseId": string;
  "conferenceAttendeeId": string;
  registration: ConferenceRegistration;
  release: ConferenceRelease;
  attendee: ConferenceAttendee;
  constructor(data?: ConferenceTicketInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ConferenceTicket`.
   */
  public static getModelName() {
    return "ConferenceTicket";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ConferenceTicket for dynamic purposes.
  **/
  public static factory(data: ConferenceTicketInterface): ConferenceTicket{
    return new ConferenceTicket(data);
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
      name: 'ConferenceTicket',
      plural: 'ConferenceTickets',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "conferenceRegistrationId": {
          name: 'conferenceRegistrationId',
          type: 'string'
        },
        "conferenceReleaseId": {
          name: 'conferenceReleaseId',
          type: 'string'
        },
        "conferenceAttendeeId": {
          name: 'conferenceAttendeeId',
          type: 'string'
        },
      },
      relations: {
        registration: {
          name: 'registration',
          type: 'ConferenceRegistration',
          model: 'ConferenceRegistration'
        },
        release: {
          name: 'release',
          type: 'ConferenceRelease',
          model: 'ConferenceRelease'
        },
        attendee: {
          name: 'attendee',
          type: 'ConferenceAttendee',
          model: 'ConferenceAttendee'
        },
      }
    }
  }
}
