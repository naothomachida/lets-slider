import { COLORS } from '../constants';

const SlideLayout = ({ children }) => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: COLORS.background,
        color: COLORS.text,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
};

export default SlideLayout;
