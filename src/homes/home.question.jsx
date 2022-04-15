import React, { useState } from "react";
const data = [
	{
		id: 1,
		question: "What is preferred method of payment?",
		answer: "We currently only accept T/T (Telegraphic Transfer). More payment methods will become available in the near future.",
		isShow: false,
	},
	{
		id: 2,
		question: "What is the standard packaging for the products?",
		answer: "Our standard packaging is a sack a thickness of 0,8. Any request for special packaging such as a carton or a box can be discussed. Minimum packaging standard is 5kg for all products. Standard container packaging minimum is 40kg.",
		isShow: false,
	},
	{
		id: 3,
		question: "Do you provide samples? Is it free?",
		answer: "Yes, we can provide some free sample, but the shipping cost will be directed to the customer. You can either pay the shipping costs to us directly or arrange a courier to collect the samples.",
		isShow: false,
	},
	{
		id: 4,
		question: "How to place order and make payment?",
		answer: "You can send your Official Purchase Order and we will send you the Proforma Invoice with our bank details to be reviewed and confirmed. After that, you can then make payment accordingly.",
		isShow: false,
	},
];

const Question = () => {
	const [faqList, setFaqList] = useState(data);

	const handleShow = (arg) => {
		const result = faqList.map((item, index) => {
			const newItem = item;
			if (arg === index) {
				newItem.isShow = !newItem.isShow;
			}

			return newItem;
		});
		setFaqList(result);
	};

	return (
		<div className="question container">
			<div className="container-body">
				<h3 className="home-title text-center">
					Frequently Asked Question
				</h3>
				<div className="question-list font-nunito">
					{faqList.map((data, index) => {
						return (
							<div className="question-group" key={index}>
								<div className="question-title">
									<h4
										className="mx-10"
										onClick={() => {
											handleShow(index);
										}}
									>
										<i className="fas fa-caret-right"></i>
										{data.question}
									</h4>
								</div>
								<div
									className={
										data.isShow
											? "question-answer active"
											: "question-answer"
									}
								>
									<p className="m-0">{data.answer}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Question;
