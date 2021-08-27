import { modeParameter, tableName } from './common';
import {arrayOf, booleanType, selectionType, stringType} from '../../sources/types';
import { ReactNode } from 'react';
import * as React from "react";

let icon: ReactNode = (
    <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        width="100%"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 200 200"
        enableBackground="new 0 0 200 200"
        xmlSpace="preserve"
    >
      <g>
        <polygon
            fill="#8C2F1E"
            points="164.3,40.2 164.3,159 100,145.2 100,54.8  "
        />
        <polygon
            fill="#DF533F"
            points="164.3,40.2 176.5,46.7 176.5,154.1 164.3,159  "
        />
        <polygon
            fill="#8D3322"
            points="35.7,40.2 23.5,46.7 23.5,154.1 35.7,159  "
        />
        <polygon
            fill="#DF513D"
            points="35.7,40.2 35.7,159 100,145.2 100,54.8  "
        />
        <polygon
            fill="#DE513D"
            points="100,8.4 100,54.8 127.7,61.3 127.7,22.3  "
        />
        <polygon
            fill="#612015"
            points="72.3,61.3 100,67 127.7,61.3 100,54.8  "
        />
        <polygon
            fill="#DE503C"
            points="100,191.6 100,145.2 127.7,138.7 127.7,177.7  "
        />
        <polygon
            fill="#EFABA3"
            points="127.7,138.7 100,133 72.3,138.7 100,145.2  "
        />
        <polygon
            fill="#DE503C"
            points="127.7,80.9 127.7,119.9 100,123.2 100,76.8  "
        />
        <polygon
            fill="#8C301F"
            points="100,8.4 100,54.8 72.3,61.3 72.3,22.3  "
        />
        <polygon
            fill="#8C301F"
            points="100,191.6 100,145.2 72.3,138.7 72.3,177.7  "
        />
        <polygon
            fill="#8C301F"
            points="72.3,80.9 72.3,119.9 100,123.2 100,76.8  "
        />
      </g>
    </svg>
);

const destination = {
  description: <>
    S3 Object Storage is ideal for backups and to archive company data. It is a convenient, affordable and compliant way to store any amount of static data
  </>,
  syncFromSourcesStatus: 'not_supported',
  id: 's3',
  type: 'database',
  displayName: 'S3',
  hidden: false,
  ui: {
    icon,
    title: (cfg: object) => {
      return cfg['_formData']['s3Endpoint'];
    },
    connectCmd: (cfg) => null
  },
  parameters: [
    tableName(),
    {
      id: '_formData.s3AccessKeyID',
      displayName: 'Access key id',
      required: true,
      type: stringType
    },
    {
      id: '_formData.s3SecretKey',
      displayName: 'Secret key',
      required: true,
      type: stringType
    },
    {
      id: '_formData.s3Bucket',
      displayName: 'Bucket',
      required: true,
      type: stringType
    },
    {
      id: '_formData.s3Region',
      displayName: 'Region',
      required: true,
      type: stringType
    },
    {
      id: '_formData.s3Endpoint',
      displayName: 'Endpoint',
      required: true,
      type: stringType
    },
    {
      id: '_formData.s3Folder',
      displayName: 'Folder',
      required: false,
      defaultValue: '',
      type: stringType
    },
    {
      id: '_formData.s3Format',
      displayName: 'Format',
      required: true,
      defaultValue: 'flat_json',
      type: selectionType(['flat_json', 'csv'], 1)
    },
    {
      id: '_formData.s3CompressionEnabled',
      displayName: 'Enable gzip compression',
      required: false,
      type: booleanType,
      defaultValue: false,
      documentation: <>
        Enables gzip compression
      </>
    }
  ]
} as const;

export default destination;
