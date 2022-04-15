import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { validation } from "./quantity.validation";
import {
	findDataApi,
	deleteDataApi,
	storeDataApi,
	updateDataApi,
} from "../../api/quantity.api";

export const useQuantity = () => {
	const [data, setData] = useState([]);
	const [id, setId] = useState("");
	const [quantity, setQuantity] = useState("");
	const [isCreateModal, setIsCreateModal] = useState(false);
	const [isEditModal, setIsEditModal] = useState(false);
	const [isAlert, setIsAlert] = useState(false);

	//Show Data Start
	const showData = async () => {
		const quantity = await findDataApi();

		setData(quantity.data.data);
	};
	//Show Data End

	useEffect(() => {
		showData();
	}, []);

	//Delete Data Start
	const deleteData = async () => {
		await deleteDataApi(id);

		setTimeout(() => {
			showData();
		}, 200);
	};
	//Delete Data End

	//Store Data Start
	const storeData = async (values) => {
		await storeDataApi(values.quantity);

		setIsCreateModal(false);
		setTimeout(() => {
			formikStore.resetForm();
			setIsAlert(true);
			showData();
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	const formikStore = useFormik({
		initialValues: {
			quantity: "",
		},
		validationSchema: validation,
		onSubmit: (values) => {
			storeData(values);
		},
	});
	//Store Data End

	//Update Data Start
	const UpdateQuantity = async (values) => {
		await updateDataApi(id, values.quantity);

		setIsEditModal(false);
		setTimeout(() => {
			setIsAlert(true);
			showData();
		}, 200);
		setTimeout(() => {
			setIsAlert(false);
		}, 1500);
	};

	const formikUpdate = useFormik({
		initialValues: {
			quantity: quantity,
		},
		enableReinitialize: true,
		validationSchema: validation,
		onSubmit: (values) => {
			UpdateQuantity(values);
		},
	});
	//Update Data End

	return {
		data,
		setId,
		setQuantity,
		deleteData,
		isCreateModal,
		setIsCreateModal,
		isEditModal,
		setIsEditModal,
		formikStore,
		formikUpdate,
		isAlert,
	};
};
