#!/usr/bin/env node
import gameBody from '../src/gameBody.js';

import { description, task } from '../src/games/progression-func.js';

gameBody(description(), task);
