import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  max-width: 1200px;
  margin: 0 auto;
  background-color:${({ theme }) => theme.COLORS.BACKGROUND_800};

  .card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .card {
    background-color:${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .card-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  .card-content {
    padding: 16px;
  }

  .card-title {
    font-size: 1.2rem;
    margin-bottom: 8px;
    color: white;
  }

  .card-description {
    font-size: 1rem;
    margin-bottom: 8px;
    color: WHITE;
  }

  .card-price {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 16px;
  }

  .card-button {
    padding: 8px 16px;
    font-size: 1rem;
    background-color: #007bff;
    background-color:${({ theme }) => theme.COLORS.BACKGROUND_800};
    border: none;
    border-radius: 4px;
    cursor: pointer;

    color: white;
  }

  .card-button:hover {
    background-color: #0056b3;
  }
`;
