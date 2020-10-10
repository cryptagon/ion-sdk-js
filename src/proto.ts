export interface TrackInfo {
  id?: string;
  ssrc?: number;
  pt?: number;
  type: string;
  codec?: string;
  fmtp?: string;
}

export interface MediaStreamInfo  {
  rid: string;
  mid?: string;
  uid: string;
  info?: string;
  tracks?: { [name: string]: TrackInfo };
  description?: string;
}

export interface Notification {
  method: string;
  data: MediaStreamInfo;
}

