import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";

interface DateProps {
  setInfo: any;
}

const Date: React.FC<DateProps> = ({ setInfo }) => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    const value = dateString.split("-");
    const year = value[0].split("").slice(-2).join("");
    const month = value[1];
    setInfo((prev: any) => ({
      ...prev,
      month,
      year,
    }));
  };
  return (
    <Space direction='vertical'>
      <DatePicker onChange={onChange} picker='month' />
    </Space>
  );
};

export default Date;
