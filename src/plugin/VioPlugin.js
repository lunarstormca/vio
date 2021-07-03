import Dialog from "vio/helpers/Dialog";
import Modal from "vio/helpers/Modal";
import Messages from "vio/helpers/Messages";
import Http from "vio/helpers/Http";

export default {
	install: (app, options) => {
		Modal.setApp(app);
		Messages.setApp(app);
		Dialog.app = app;

		Object.defineProperty(app.config.globalProperties, '$Dialog', {get: () => Dialog});
		Object.defineProperty(app.config.globalProperties, '$Modal', {get: () => Modal});
		Object.defineProperty(app.config.globalProperties, '$Messages', {get: () => Messages});
		Object.defineProperty(app.config.globalProperties, '$http', {get: () => Http});
		Object.defineProperty(app.config.globalProperties, '$ajax', app.config.globalProperties.$http);
	}
}