import React, { useState } from "react";
import { AccountCreationVerification,NewAccountData } from "../Types";


interface FormData {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function NewAccountCreate() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !gender ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      // Handle the case when any field is empty
      console.log("Please fill in all the fields");
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setPasswordError("Password should be at least 8 characters long");
      return;
    }

    // Password validation regex patterns
    const uppercaseRegex = /^(?=.*[A-Z])/;
    const numberRegex = /^(?=.*\d)/;
    const specialCharRegex = /^(?=.*[!@#$%^&*])/;

    // Check if the password meets the criteria
    if (
      !uppercaseRegex.test(password) ||
      !numberRegex.test(password) ||
      !specialCharRegex.test(password)
    ) {
      setPasswordError(
        "Password must contain at least one uppercase letter, one number, and one special character"
      );
      return;
    }

    const lowercaseEmail = email.toLowerCase();
    const lowercaseSuffix = "@cuiatd.edu.pk";

    if (!lowercaseEmail.endsWith(lowercaseSuffix)) {
      setEmailError("Email should end with @cuiatd.edu.pk");
      return;
    }

    const formData: FormData = {
      firstName,
      lastName,
      gender,
      email,
      password,
      confirmPassword,
    };

    console.log("Form Data:", formData);
    // Perform further processing with the form data

    setFirstName("");
    setLastName("");
    setGender("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setEmailError("");
    setPasswordError("");
  };

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <div>
      <form
        className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
        onSubmit={handleFormSubmit}
      >
        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            First Name
          </label>
          <input
            type="text"
            placeholder="John"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Last name
          </label>
          <input
            type="text"
            placeholder="Snow"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>

        <div>
          <label
            htmlFor="gender"
            className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
          >
            Gender
          </label>
          <select
            id="gender" 
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            value={gender}
            onChange={handleGenderChange}
            required
          >
            <option value="" disabled hidden  style={{color:"#4b5552"}}>
              Select one of the options
            </option>
            <option value="1">Male</option>
            <option value="2">Female</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Email address
          </label>
          <input
            type="email"
            placeholder="johnsnow@atdstudent.cui.edu.pk"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {emailError && <p className="text-red-500 mt-1">{emailError}</p>}
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Confirm password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          {passwordError && (
            <p className="text-red-500 mt-1">{passwordError}</p>
          )}
        </div>

        <button
          className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          type="submit"
        >
          <span>Sign Up </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 rtl:-scale-x-100"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default NewAccountCreate;
