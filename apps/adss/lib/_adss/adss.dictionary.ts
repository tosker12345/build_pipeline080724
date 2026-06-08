
import { serviceDictionary } from "akanjs/dictionary";

import type { AdssEndpoint } from "./adss.signal";

export const dictionary = serviceDictionary(["en", "ko"])
  .endpoint<AdssEndpoint>((fn) => ({}))
  .translate({});
