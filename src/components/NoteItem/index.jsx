import { Container } from './styles'

import { FiPlus, FiPlus } from 'react-icons/fi';

export function NOteItem( isNew, value, onClick, ...rest ){
    return(
        <Container isNew={isNew}>
            <input
             type="text"
             value={value}
             readOnly={!isNew}
             {...rest}
            />

            <button
                type='button'
                onClick={onClickl}
            >
                { isNew ? <FiPlus/> : <FiPlus/> }
            </button>

        </Container>
    )
}