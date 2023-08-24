const Button = (props) => {
    let buttonClass;

    switch (props.vibrant) {
      case "outline":
        buttonClass = "text-purple-800 bg-white border-purple-800 hover:bg-purple-800 hover:text-white"
        break;
      default:
        buttonClass = "text-white bg-purple-800 hover:bg-purple-900 "
        break;
    }

  return (
    <button
      {...props}
      type="submit"
      className={` ${props.className} ${buttonClass} w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
    >
      {props.text}
    </button>
  );
};

export default Button;
