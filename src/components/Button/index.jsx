import { Container } from './styles';

export function Button({ title, loading = false, href, ...rest }) {
  if (href) {
    return (
      <Container as="a" href={href} {...rest}>
        {loading ? 'Carregando...' : title}
      </Container>
    );
  }

  return (
    <Container type="button" disabled={loading} {...rest}>
      {loading ? 'Carregando...' : title}
    </Container>
  );
}
