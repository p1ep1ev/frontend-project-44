#!/usr/bin/env node
import gameBody from '../src/gameBody.js';

import { description, getTask } from '../src/games/progression-func.js';

gameBody(description(), getTask);
