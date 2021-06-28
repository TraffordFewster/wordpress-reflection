const $ = jQuery;
const elements = {
    contactForm : {
        ele : $("#contactForm")
    },
    fname : {
        ele : $("#fname"),
        val : verifyString
    },
    lname : {
        ele : $("#lname"),
        val : verifyString
    },
    email : {
        ele : $("#email"),
        val : validateEmail
    },
    phone : {
        ele : $("#phone"),
        val : validatePhone
    },
    message : {
        ele : $("#message"),
        val : verifyString
    },
    subButton : {
        ele : $("#subButton")
    }

}

const inputs = ["fname","lname", "email", "phone", "message"]

function verifyString(str) {
	if (typeof str === 'string') {
		return str.length > 0;
	}
	return false;
}
function validateEmail(mail) {
	return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
		mail
	);
}
function validatePhone(phone) {
	return /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/.test(phone);
}
function validateInputs() {
    let errors = [];
    for (let i = 0; i < inputs.length; i++) {
        let e = elements[inputs[i]]
        if (!e.val(e.ele.val())) {
            errors.push(inputs[i])
        }
    }
    return errors
}

function addClasses(arr,cla) {
    for (let i = 0; i < arr.length; i++) {
        let e = elements[arr[i]]
        e.ele.addClass(cla)
    }
}

function remClasses(arr,cla) {
    for (let i = 0; i < arr.length; i++) {
        let e = elements[arr[i]]
        e.ele.removeClass(cla)
    }
}

elements.contactForm.ele.on("submit", function(ev){
    err = validateInputs();
    if (err.length > 0) {
        ev.preventDefault()
        remClasses(inputs,"error")
        addClasses(err,"error")
    }
})
console.log("HELLO")