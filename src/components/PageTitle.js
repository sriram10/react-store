import {Helmet} from "react-helmet";

const PageTitle = ({ name }) => <Helmet><title>{name}</title></Helmet>

export default PageTitle;