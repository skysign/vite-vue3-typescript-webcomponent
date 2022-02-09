import { defineCustomElement } from 'vue';
import myTwoButtons from './components/MyTwoButtons.ce.vue';

const myBtnsComponent = defineCustomElement(myTwoButtons);

customElements.define('mytwo-buttons', myBtnsComponent);
