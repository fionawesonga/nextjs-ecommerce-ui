import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from './index';

describe('HomePage Component', () => {
  beforeEach(() => {

    const scrollMock = jest.fn();
    window.HTMLElement.prototype.scrollBy = scrollMock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the Categories section with title and buttons', () => {
    render(<HomePage />);
    expect(screen.getByText('Browse by Categories')).toBeInTheDocument();
    expect(screen.getByLabelText('Scroll Left')).toBeInTheDocument();
    expect(screen.getByLabelText('Scroll Right')).toBeInTheDocument();
    expect(screen.getByText('Categories')).toBeInTheDocument();
  });

  it('calls scrollLeft when left button is clicked', () => {
    render(<HomePage />);
    const leftButton = screen.getByLabelText('Scroll Left');
    fireEvent.click(leftButton);
    expect(window.HTMLElement.prototype.scrollBy).toHaveBeenCalledWith({ left: -600, behavior: 'smooth' });
  });

  it('calls scrollRight when right button is clicked', () => {
    render(<HomePage />);
    const rightButton = screen.getByLabelText('Scroll Right');
    fireEvent.click(rightButton);
    expect(window.HTMLElement.prototype.scrollBy).toHaveBeenCalledWith({ left: 600, behavior: 'smooth' });
  });

  it('handles scrollRef correctly when ref is not null', () => {
    render(<HomePage />);
    const scrollContainer = screen.getByTestId('scroll-container');
    expect(scrollContainer).toBeInTheDocument();
  });
});