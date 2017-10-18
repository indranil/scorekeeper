// workaround for the gaudy warning every time tests are run
// https://github.com/facebookincubator/create-react-app/issues/3199#issuecomment-334801311
import raf from './tempPolyfills';
// setting up enzyme
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
