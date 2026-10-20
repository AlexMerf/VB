import { z } from 'zod'

import stagersJson from './stagers.json'

import { stageSchema } from './schemas'

export const stages = z.array(stageSchema).parse(stagersJson)
