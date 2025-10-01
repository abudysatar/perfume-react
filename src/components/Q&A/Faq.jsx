import "./q&a.css";
import * as Accordion from "@radix-ui/react-accordion";

const faqs = [
  {
    question: "HOW LONG CAN I EXPECT THE FRAGRANCE TO LAST ON MY SKIN?",
    answer:
      "The longevity of our fragrances varies based on factors such as skin type, climate, and activity level. However, our carefully crafted scents are designed to have a lasting presence. On average, you can enjoy the captivating notes for 6 to 8 hours. To enhance the longevity, consider applying the fragrance to pulse points and using our complementary scented body products.",
  },
  {
    question: "ARE YOUR PERFUMES SUITABLE FOR SENSITIVE SKIN OR ALLERGIES?",
    answer:
      "Yes, our perfumes are dermatologically tested and formulated with high-quality ingredients. However, we recommend performing a patch test prior to full use if you have particularly sensitive skin or known allergies.",
  },
  {
    question: "HOW DO YOU ENSURE YOUR COMMITMENT TO SUSTAINABILITY?",
    answer:
      "We are committed to sustainability by sourcing responsibly, using eco-friendly packaging, and supporting ethical practices across our supply chain.",
  },
];

const FAQ = () => {
  return (
    <div className="FaqContainer">
      <h2 className="heading2">You've got questions, we've got answers.</h2>

      <Accordion.Root className="AccordionRoot" type="single" collapsible>
        {faqs.map((faq, index) => (
          <Accordion.Item
            key={index}
            className="FaqItem"
            value={`item-${index + 1}`}
          >
            <Accordion.Trigger className="AccordionTrigger">
              <span>{faq.question}</span>
              <span className="AccordionIcon FaqIcon"></span>
            </Accordion.Trigger>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">{faq.answer}</div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};

export default FAQ;
