import MainTable from 'components/MainTable';

export default function HomeView() {
  const handleClick = () => {
    window.open('/popup', '', 'height=500,width=1000,scrollbars=yes');
  };

  return <MainTable onClick={handleClick} />;
}
