
import { serve } from "akanjs/service";

export class AdssService extends serve("adss" as const, { serverMode: "batch" }, () => ({})) {}
