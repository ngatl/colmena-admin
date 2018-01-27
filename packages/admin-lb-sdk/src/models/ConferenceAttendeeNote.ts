/* tslint:disable */
import {
  ConferenceAttendee
} from '../index';

declare var Object: any;
export interface ConferenceAttendeeNoteInterface {
  "id": string;
  "peerAttendeeId": string;
  "note"?: string;
  "audioUrl"?: string;
  "imageUrl"?: string;
  "conferenceAttendeeId"?: string;
  "created"?: Date;
  "modified"?: Date;
  attendee?: ConferenceAttendee;
  peer?: ConferenceAttendee;
}

export class ConferenceAttendeeNote implements ConferenceAttendeeNoteInterface {
  "id": string;
  "peerAttendeeId": string;
  "note": string;
  "audioUrl": string;
  "imageUrl": string;
  "conferenceAttendeeId": string;
  "created": Date;
  "modified": Date;
  attendee: ConferenceAttendee;
  peer: ConferenceAttendee;
  constructor(data?: ConferenceAttendeeNoteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ConferenceAttendeeNote`.
   */
  public static getModelName() {
    return "ConferenceAttendeeNote";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ConferenceAttendeeNote for dynamic purposes.
  **/
  public static factory(data: ConferenceAttendeeNoteInterface): ConferenceAttendeeNote{
    return new ConferenceAttendeeNote(data);
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
      name: 'ConferenceAttendeeNote',
      plural: 'ConferenceAttendeeNotes',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "peerAttendeeId": {
          name: 'peerAttendeeId',
          type: 'string'
        },
        "note": {
          name: 'note',
          type: 'string'
        },
        "audioUrl": {
          name: 'audioUrl',
          type: 'string'
        },
        "imageUrl": {
          name: 'imageUrl',
          type: 'string'
        },
        "conferenceAttendeeId": {
          name: 'conferenceAttendeeId',
          type: 'string'
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
        attendee: {
          name: 'attendee',
          type: 'ConferenceAttendee',
          model: 'ConferenceAttendee'
        },
        peer: {
          name: 'peer',
          type: 'ConferenceAttendee',
          model: 'ConferenceAttendee'
        },
      }
    }
  }
}
