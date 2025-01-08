import Card from "../components/Elements/Card_2";
import Card3 from "../components/Elements/Card_3";
import MainLayout from "../components/Layouts/MainLayout";

const ExpencessPage = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
        <div className="mb-4 sm:w-full">
          <Card />
        </div>
      {/* top content end*/}
      {/* bottom content start*/}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
      <Card />
      <Card content="deskripsi" />
      <Card />
      <Card />
      <Card />
      <Card content="deskripsi" />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default ExpencessPage;
