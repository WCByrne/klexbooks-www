type Props = {
  title: string;
  subtitle?: string;
};

const PageHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="page-header">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default PageHeader;
