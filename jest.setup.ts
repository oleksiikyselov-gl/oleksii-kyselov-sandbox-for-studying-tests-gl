import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';

import { TextDecoder, TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

configure({ testIdAttribute: 'data-a-test' });
