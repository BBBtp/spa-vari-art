export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message } = req.body;

    // Здесь можно добавить отправку на email или в CRM
    console.log('Form submission:', { name, email, phone, message });

    // Возвращаем успешный ответ
    res.status(200).json({ message: 'Форма успешно отправлена' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Ошибка при отправке формы' });
  }
} 