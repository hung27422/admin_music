import classNames from "classnames/bind";

import styles from "./Button.module.scss";
const cx = classNames.bind(styles);
function Button({
  children,
  to,
  link,
  href,
  onClick,
  remove,
  update,
  title,
  ...passProps
}) {
  let Comp = "button";
  let props = {
    onClick,
    ...passProps,
  };
  if (to) {
    props.to = to;
  }
  if (href) {
    props.href = href;
  }
  const classes = cx("wrapper", { remove, update, title });
  return (
    <Comp className={classes} {...props}>
      <span className={cx("title")}>{children}</span>
    </Comp>
  );
}

export default Button;
