import {PropTypes} from 'prop-types'

export default function CounterButton({by, incrementMethod, decrementMethod}) {

    return (
        <div className="Counter">
            <div>
                <button className="counterButton" 
                    onClick={() => incrementMethod(by)}
                >Increase By {by}</button>

                <button className="counterButton" 
                    onClick={() => decrementMethod(by)}
                >Decrease By {by}</button>
            </div>
        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 1
}