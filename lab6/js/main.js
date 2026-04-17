const { createApp } = Vue;

createApp({
    data() {
        return {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            confirmPassword: '',
            email: '',
            streetAddress: '',
            suburb: '',
            postcode: '',
            mobile: '',
            dob: '',
            jobCategory: '',
            showTerms: false,
            errors: []
        }
    },

    methods: {
        checkForm(e) {
            this.errors = [];

            // First Name – required, letters only
            if (!this.firstName.trim()) {
                this.errors.push('First Name is required.');
            } else if (!/^[a-zA-Z]+$/.test(this.firstName.trim())) {
                this.errors.push('First Name must contain letters only.');
            }

            // Last Name – required, letters only
            if (!this.lastName.trim()) {
                this.errors.push('Last Name is required.');
            } else if (!/^[a-zA-Z]+$/.test(this.lastName.trim())) {
                this.errors.push('Last Name must contain letters only.');
            }

            // Username – required, min 3 characters
            if (!this.username.trim()) {
                this.errors.push('Username is required.');
            } else if (this.username.trim().length < 3) {
                this.errors.push('Username must be at least 3 characters.');
            }

            // Password – required, min 8 chars, must include a special character
            if (!this.password) {
                this.errors.push('Password is required.');
            } else if (this.password.length < 8) {
                this.errors.push('Password must be at least 8 characters.');
            } else if (!/[$%^&*]/.test(this.password)) {
                this.errors.push('Password must include at least one special character ($, %, ^, &, *).');
            }

            // Confirm Password – must match password
            if (!this.confirmPassword) {
                this.errors.push('Confirm Password is required.');
            } else if (this.confirmPassword !== this.password) {
                this.errors.push('Confirm Password must match Password.');
            }

            // Email – required, valid format
            if (!this.email.trim()) {
                this.errors.push('Email is required.');
            } else if (!/[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/.test(this.email.trim())) {
                this.errors.push('Email must be in a valid format.');
            }

            // Street Address – optional, max 40 characters
            if (this.streetAddress.length > 40) {
                this.errors.push('Street Address must not exceed 40 characters.');
            }

            // Suburb – optional, max 20 characters
            if (this.suburb.length > 20) {
                this.errors.push('Suburb must not exceed 20 characters.');
            }

            // Postcode – required, exactly 4 digits (may start with 0)
            if (!this.postcode.trim()) {
                this.errors.push('Postcode is required.');
            } else if (!/^\d{4}$/.test(this.postcode.trim())) {
                this.errors.push('Postcode must be exactly 4 digits.');
            }

            // Mobile Number – required, exactly 10 digits, must start with 04
            if (!this.mobile.trim()) {
                this.errors.push('Mobile Number is required.');
            } else if (!/^04\d{8}$/.test(this.mobile.trim())) {
                this.errors.push('Mobile Number must be 10 digits and start with 04.');
            }

            // Date of Birth – required, valid date, applicant must be at least 16
            if (!this.dob) {
                this.errors.push('Date of Birth is required.');
            } else {
                const dobDate = new Date(this.dob);
                const today = new Date();
                const minAgeDate = new Date(today.getFullYear() - 16, today.getMonth(), today.getDate());
                if (dobDate > minAgeDate) {
                    this.errors.push('Applicant must be at least 16 years old.');
                }
            }

            // Preferred Job Category – required
            if (!this.jobCategory) {
                this.errors.push('Preferred Job Category is required.');
            }

            if (this.errors.length) {
                e.preventDefault();
            }
        }
    }
}).mount('#app');
