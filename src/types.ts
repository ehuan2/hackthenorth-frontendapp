// This is TypeScript, if you don't know TypeScript, no problem! You can read up about
// it here https://www.typescriptlang.org/docs/handbook/advanced-types.html or just
// have a look at the sample data by visiting the endpoint above.
// Note: You DO NOT have to use typescript in your submission!

// enums for checking later
export enum PermissionTypeEnum {
  PUBLIC = "public", PRIVATE = "private"
};

export enum EventTypeEnum {
  WORKSHOP = "workshop", ACTIVITY = "activity", TECH_TALK = "tech_talk"
}

// Each event will belong to one of the following types
type TEventType = "workshop" | "activity" | "tech_talk";
type TPermission = "public" | "private";

export type TSpeaker = {
  name: string;
  profile_pic?: string; // a url to an image
};

// The information for an event will look like so
export type TEvent = {
  id: number;
  name: string;
  event_type: TEventType;
  permission?: TPermission;

  start_time: number; // unix timestamp (ms)
  end_time: number; // unix timestamp (ms)

  description?: string; // a paragraph describing the event
  speakers: TSpeaker[]; // a list of speakers for the event

  public_url?: string; // a url to display for the general public
  private_url: string; // a url to display for hackers
  related_events: number[]; // a list ids corresponding to related events
};

// What the endpoint will return
export type TEndpointResponse = TEvent[];