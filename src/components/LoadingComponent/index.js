import React from 'react';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function LoadingComponent({ type, color }) {
  const WrapperLoading = styled.div`
        display:flex;
        justify-content:center;
    `;

  return (
    <WrapperLoading>
      <ReactLoading type={type} color={color} />
    </WrapperLoading>

  );
}

LoadingComponent.defaultProps = {
  type: 'spin',
  color: '#e4a518',
};

LoadingComponent.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
};
