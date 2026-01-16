import Card from "./card.jsx";
import './cardlist.css'
const CardList = () => {
  const data = {
    title: "To do",
    total: 3,
    tasks: [
      {
        id: 1,
        title: "Mobile Wireframes",
        description:
          "Lên bộ khung ứng dụng thích ứng cho Mobile, có thể lên cả Desktop sau khi đã hoàn thiện",
        organization: "MindX School",
        attachments: 3,
        flagged: true,
        dueDate: "Apr 12",
      },
      {
        id: 2,
        title: "Mobile Wireframes",
        description:
          "Thực hiện nghiên cứu người dùng để hiểu rõ hơn nhu cầu, thói quen và mong muốn của khách hàng mục tiêu. Từ đó, đưa ra các giải pháp phù hợp nhằm nâng cao trải nghiệm người dùng.",
        assignee: "Nguyễn Văn A",
        attachments: 1,
        flagged: false,
        dueDate: "Apr 12",
      },
      {
        id: 3,
        title: "Client Call",
        description:
          "Cuộc họp trực tuyến với khách hàng để thảo luận về yêu cầu dự án, cập nhật tiến độ và giải quyết các vấn đề phát sinh. Cần chuẩn bị tài liệu và câu hỏi trước cuộc họp.",
        assignee: "Trịnh Hồng N",
        attachments: 0,
        flagged: true,
        dueDate: "Apr 2",
      },
    ],
  };
  return (
  <div className="card-list">
    <h2>
      {data.title} <span>({data.total})</span>
    </h2>

    {data.tasks.map((item) => (
      <Card
        key={item.id}
        title={item.title}
        content={item.description}
        name={item.assignee || item.organization}
        attachments={item.attachments}
        time={item.dueDate}
      />
    ))}
  </div>
  )
};

export default CardList;
