#!/usr/bin/env node
import gameBody from '../src/gameBody.js';

import { description, task } from '../src/games/prime-func.js';

gameBody(description(), task);
