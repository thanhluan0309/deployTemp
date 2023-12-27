using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Emgu.CV;
using Emgu.CV.Structure;
using Emgu.CV.Face;
using Emgu.CV.CvEnum;
using System.IO;
using System.Threading;
using System.Diagnostics;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace Simple_Face_Recognition_App
{
    public partial class Form1 : Form
    {
        private const int ImageBoxCount = 7; // Số lượng ImageBox
        private int SoluongImgShow = 5;
     
        private int locate = 10;
        private List<PictureBox> pictureBoxes;
        public Form1()
        {
            InitializeComponent();
            InitializeImageBoxes();

            //

            PictureBox pictureBox = this.Controls["img" + 3] as PictureBox;
            PictureBox imgboxShow = this.Controls["imgboxShow"] as PictureBox;
            imgboxShow.BackColor = pictureBox.BackColor;
        }

  
        private void InitializeImageBoxes()
        {
            
            pictureBoxes = new List<PictureBox>();
            for (int i = 1; i <= ImageBoxCount; i++)
            {
                PictureBox pictureBox = Controls.Find($"img{i}", true).FirstOrDefault() as PictureBox;

                if (pictureBox != null)
                {
                    pictureBoxes.Add(pictureBox);
                }
            }

            for (int i = 1; i <= SoluongImgShow; i++)
            {
                PictureBox pictureBox = Controls.Find($"img{i}", true).FirstOrDefault() as PictureBox;

                if (pictureBox != null)
                {
                  

                    pictureBoxes[i].Visible = true;
                }
            }

            // Thiết lập thanh cuộn
            vScrollBar2.Minimum = 10;
            vScrollBar2.Maximum = 90;
            vScrollBar2.SmallChange = 10;
            vScrollBar2.Value = 30;

        }



        private void vScrollBar2_Scroll(object sender, ScrollEventArgs e)
        {

            // Tính toán chỉ số của PictureBox cần hiển thị 10 20 30 40 50 60 
            int scrollValue = e.NewValue;
            
            //647, 157zxczxc

            // Hiển thị nội dung tương ứng trong các PictureBox
            if(scrollValue/10 > 3)
            {
                
                for (int i = 1; i <= 5; i++)
                {

                            pictureBoxes[1].Visible = false;
                        

                }

            }else
            {

            }
         

            PictureBox pictureBox = this.Controls["img" + (e.NewValue / 10)] as PictureBox;
            if (pictureBox != null)
            {

                PictureBox imgboxShow = this.Controls["imgboxShow"] as PictureBox;
                imgboxShow.BackColor = pictureBox.BackColor;
            }




            // Tính toán vị trí cho imgboxShow dựa trên vị trí của imagebox1

        }

        private void imageBox7_Click(object sender, EventArgs e)
        {

        }
    }
}
// Mở rộng lớp PictureBox để thêm phương thức quay ảnh
public static class PictureBoxExtensions
{
    public static void RotateImage(this PictureBox pictureBox, float angle)
    {
        Bitmap bitmap = new Bitmap(pictureBox.Image);
        using (Graphics g = Graphics.FromImage(bitmap))
        {
            g.TranslateTransform(bitmap.Width / 2, bitmap.Height / 2);
            g.RotateTransform(angle);
            g.TranslateTransform(-bitmap.Width / 2, -bitmap.Height / 2);
            g.DrawImage(pictureBox.Image, new Point(0, 0));
        }
        pictureBox.Image = bitmap;
    }
}
