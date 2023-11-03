import styled from 'styled-components';

const AddressWrapper = styled.div`
    margin-top: 5px;
    font-size: 0.8rem;
    color: #777;
    line-height: 1rem;
`;

const AddressLabel = styled.span`
    font-weight: bold;
`;

const AddressComponent = ({ address, postalCode }) => {
    return (
        <AddressWrapper>
            <AddressLabel>{address}</AddressLabel><br/>
            <AddressLabel>CEP: {postalCode}</AddressLabel>
        </AddressWrapper>
    );
}

export default AddressComponent;