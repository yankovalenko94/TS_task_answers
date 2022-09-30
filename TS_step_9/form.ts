interface IForm {
	login: string;
	password: string;
}

const validationData: Validation<IForm> = {
	login: { isValid: false, errorMsg: "At least 3 characters" },
	password: { isValid: true },
};

type Validation<T> = {
	[P in keyof T]: { isValid: true } | { isValid: false; errorMsg: string };
};
