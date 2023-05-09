export default function validate(values) {
    let errors = {};
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be 8 or more characters';
    }
    if (!values.phone) {
        errors.phone = 'Password is required';
      } else if (values.phone.length < 10) {
        errors.phone = 'Password must be 10 or more characters';
      }
      if (!values.message) {
        errors.message = 'Password is required';
      } else if (values.message.length < 120) {
        errors.message = 'Password must be 1 or more characters';
      }
    return errors;
  };
  