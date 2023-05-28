import { render, screen } from '@testing-library/react'
import Header from './index'

it("test_header_is_responsive_and_adapts_to_screen_sizes", () => {
    const wrapper = render(<Header />);
    expect(wrapper).toBeTruthy()
    const h2 = wrapper.container.querySelector('h2')
    expect(h2?.textContent).toBe('Nombre de Usuario')
});
it("test_images_render_correctly", () => {
    render(<Header />);
    const logo = screen.getAllByAltText("logotuPrutec");
    expect(logo.length).toBe(1);
  });