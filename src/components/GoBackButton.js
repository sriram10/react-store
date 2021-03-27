import { Button } from "react-bootstrap"
import { useHistory } from "react-router"

const GoBackButton = () => {
  const history = useHistory()
  return (
    <Button onClick={() => {
      history.goBack()
    }}>&lt; Go Back</Button>
  )
}
export default GoBackButton