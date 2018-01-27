/* tslint:disable */
import { Injectable } from '@angular/core';
import { Email } from '../../models/Email';
import { Core } from '../../models/Core';
import { StorageContainer } from '../../models/StorageContainer';
import { System } from '../../models/System';
import { ContentEvent } from '../../models/ContentEvent';
import { ContentPage } from '../../models/ContentPage';
import { ContentProduct } from '../../models/ContentProduct';
import { ContentPost } from '../../models/ContentPost';
import { StorageFile } from '../../models/StorageFile';
import { SystemDomain } from '../../models/SystemDomain';
import { SystemSetting } from '../../models/SystemSetting';
import { SystemUser } from '../../models/SystemUser';
import { ConferenceEvent } from '../../models/ConferenceEvent';
import { ConferenceLocation } from '../../models/ConferenceLocation';
import { ConferenceSpeaker } from '../../models/ConferenceSpeaker';
import { ConferenceSponsor } from '../../models/ConferenceSponsor';
import { ConferenceTicket } from '../../models/ConferenceTicket';
import { ConferenceRegistration } from '../../models/ConferenceRegistration';
import { ConferenceRelease } from '../../models/ConferenceRelease';
import { ConferenceAttendee } from '../../models/ConferenceAttendee';
import { ConferenceAttendeeNote } from '../../models/ConferenceAttendeeNote';
import { Dev } from '../../models/Dev';
import { Ping } from '../../models/Ping';
import { Meta } from '../../models/Meta';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Email: Email,
    Core: Core,
    StorageContainer: StorageContainer,
    System: System,
    ContentEvent: ContentEvent,
    ContentPage: ContentPage,
    ContentProduct: ContentProduct,
    ContentPost: ContentPost,
    StorageFile: StorageFile,
    SystemDomain: SystemDomain,
    SystemSetting: SystemSetting,
    SystemUser: SystemUser,
    ConferenceEvent: ConferenceEvent,
    ConferenceLocation: ConferenceLocation,
    ConferenceSpeaker: ConferenceSpeaker,
    ConferenceSponsor: ConferenceSponsor,
    ConferenceTicket: ConferenceTicket,
    ConferenceRegistration: ConferenceRegistration,
    ConferenceRelease: ConferenceRelease,
    ConferenceAttendee: ConferenceAttendee,
    ConferenceAttendeeNote: ConferenceAttendeeNote,
    Dev: Dev,
    Ping: Ping,
    Meta: Meta,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
