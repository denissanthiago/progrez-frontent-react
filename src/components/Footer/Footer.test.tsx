import { render } from '@testing-library/react'
import Footer from './index'

it("test_footer_is_responsive_and_adapts_to_screen_sizes", () => {
    const wrapper = render(<Footer />);
    expect(wrapper).toBeTruthy()
    const p = wrapper.container.querySelector('p')
    expect(p?.textContent).toBe('© 2023 Progrez All rights reserved')
});