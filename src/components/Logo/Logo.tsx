import clsx from "clsx";
import LogoImage from "../../img/svg/logo.svg"

interface LogoProps {
	sx?: string;
}

const Logo: React.FC<LogoProps> = ({ sx}) => {

	return (
		<LogoImage className={clsx(sx)}  aria-label="site's logo" />
	)
}

export default Logo