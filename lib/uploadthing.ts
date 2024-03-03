import { generateReactHelpers } from '@uploadthing/react/hooks';

import { ourFileRouter, type OurFileRouter } from "@/app/api/uploadthing/core";

export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();