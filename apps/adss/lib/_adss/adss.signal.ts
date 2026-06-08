
import { endpoint, internal } from "akanjs/signal";

import * as srv from "../srv";

export class AdssInternal extends internal(srv.adss, () => ({})) {}

export class AdssEndpoint extends endpoint(srv.adss, () => ({})) {}
  