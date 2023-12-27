namespace Simple_Face_Recognition_App
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.img7 = new Emgu.CV.UI.ImageBox();
            this.img4 = new Emgu.CV.UI.ImageBox();
            this.img3 = new Emgu.CV.UI.ImageBox();
            this.img2 = new Emgu.CV.UI.ImageBox();
            this.img1 = new Emgu.CV.UI.ImageBox();
            this.vScrollBar2 = new System.Windows.Forms.VScrollBar();
            this.imgboxShow = new Emgu.CV.UI.ImageBox();
            this.img6 = new Emgu.CV.UI.ImageBox();
            this.imageList1 = new System.Windows.Forms.ImageList(this.components);
            this.textBox1 = new System.Windows.Forms.TextBox();
            this.img5 = new Emgu.CV.UI.ImageBox();
            ((System.ComponentModel.ISupportInitialize)(this.img7)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.img4)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.img3)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.img2)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.img1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.imgboxShow)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.img6)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.img5)).BeginInit();
            this.SuspendLayout();
            // 
            // img7
            // 
            this.img7.BackColor = System.Drawing.Color.DarkRed;
            this.img7.Location = new System.Drawing.Point(647, 360);
            this.img7.Name = "img7";
            this.img7.Size = new System.Drawing.Size(75, 23);
            this.img7.TabIndex = 2;
            this.img7.TabStop = false;
            this.img7.Visible = false;
            // 
            // img4
            // 
            this.img4.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.img4.Location = new System.Drawing.Point(647, 210);
            this.img4.Name = "img4";
            this.img4.Size = new System.Drawing.Size(75, 23);
            this.img4.TabIndex = 2;
            this.img4.TabStop = false;
            this.img4.Visible = false;
            // 
            // img3
            // 
            this.img3.BackColor = System.Drawing.SystemColors.ActiveCaptionText;
            this.img3.Location = new System.Drawing.Point(647, 160);
            this.img3.Name = "img3";
            this.img3.Size = new System.Drawing.Size(75, 23);
            this.img3.TabIndex = 2;
            this.img3.TabStop = false;
            this.img3.Visible = false;
            // 
            // img2
            // 
            this.img2.BackColor = System.Drawing.SystemColors.Info;
            this.img2.Location = new System.Drawing.Point(647, 110);
            this.img2.Name = "img2";
            this.img2.Size = new System.Drawing.Size(75, 23);
            this.img2.TabIndex = 2;
            this.img2.TabStop = false;
            this.img2.Visible = false;
            // 
            // img1
            // 
            this.img1.BackColor = System.Drawing.SystemColors.ScrollBar;
            this.img1.Location = new System.Drawing.Point(647, 60);
            this.img1.Name = "img1";
            this.img1.Size = new System.Drawing.Size(75, 23);
            this.img1.TabIndex = 2;
            this.img1.TabStop = false;
            this.img1.Visible = false;
            // 
            // vScrollBar2
            // 
            this.vScrollBar2.Location = new System.Drawing.Point(773, 125);
            this.vScrollBar2.MinimumSize = new System.Drawing.Size(10, 10);
            this.vScrollBar2.Name = "vScrollBar2";
            this.vScrollBar2.Size = new System.Drawing.Size(101, 108);
            this.vScrollBar2.TabIndex = 0;
            this.vScrollBar2.Scroll += new System.Windows.Forms.ScrollEventHandler(this.vScrollBar2_Scroll);
            // 
            // imgboxShow
            // 
            this.imgboxShow.BackColor = System.Drawing.SystemColors.WindowFrame;
            this.imgboxShow.Location = new System.Drawing.Point(314, 138);
            this.imgboxShow.Name = "imgboxShow";
            this.imgboxShow.Size = new System.Drawing.Size(77, 89);
            this.imgboxShow.TabIndex = 2;
            this.imgboxShow.TabStop = false;
            // 
            // img6
            // 
            this.img6.BackColor = System.Drawing.Color.IndianRed;
            this.img6.Location = new System.Drawing.Point(647, 310);
            this.img6.Name = "img6";
            this.img6.Size = new System.Drawing.Size(75, 23);
            this.img6.TabIndex = 3;
            this.img6.TabStop = false;
            this.img6.Visible = false;
            // 
            // imageList1
            // 
            this.imageList1.ColorDepth = System.Windows.Forms.ColorDepth.Depth8Bit;
            this.imageList1.ImageSize = new System.Drawing.Size(16, 16);
            this.imageList1.TransparentColor = System.Drawing.Color.Transparent;
            // 
            // textBox1
            // 
            this.textBox1.Location = new System.Drawing.Point(522, 163);
            this.textBox1.Name = "textBox1";
            this.textBox1.Size = new System.Drawing.Size(100, 20);
            this.textBox1.TabIndex = 4;
            this.textBox1.Text = "====>";
            // 
            // img5
            // 
            this.img5.BackColor = System.Drawing.Color.IndianRed;
            this.img5.Location = new System.Drawing.Point(647, 260);
            this.img5.Name = "img5";
            this.img5.Size = new System.Drawing.Size(75, 23);
            this.img5.TabIndex = 5;
            this.img5.TabStop = false;
            this.img5.Visible = false;
            // 
            // Form1
            // 
            this.ClientSize = new System.Drawing.Size(1299, 501);
            this.Controls.Add(this.img5);
            this.Controls.Add(this.textBox1);
            this.Controls.Add(this.img6);
            this.Controls.Add(this.imgboxShow);
            this.Controls.Add(this.img1);
            this.Controls.Add(this.img7);
            this.Controls.Add(this.img2);
            this.Controls.Add(this.img4);
            this.Controls.Add(this.img3);
            this.Controls.Add(this.vScrollBar2);
            this.Name = "Form1";
            ((System.ComponentModel.ISupportInitialize)(this.img7)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.img4)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.img3)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.img2)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.img1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.imgboxShow)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.img6)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.img5)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private Emgu.CV.UI.ImageBox imageBox1;
        private Emgu.CV.UI.ImageBox imageBox2;
        private Emgu.CV.UI.ImageBox imageBox3;
        private Emgu.CV.UI.ImageBox imageBox4;
        private Emgu.CV.UI.ImageBox imageBox5;
        private Emgu.CV.UI.ImageBox imageBox6;
        private System.Windows.Forms.VScrollBar vScrollBar1;
        private Emgu.CV.UI.ImageBox img7;
        private Emgu.CV.UI.ImageBox img4;
        private Emgu.CV.UI.ImageBox img3;
        private Emgu.CV.UI.ImageBox img2;
        private Emgu.CV.UI.ImageBox img1;
        private System.Windows.Forms.VScrollBar vScrollBar2;
        private Emgu.CV.UI.ImageBox imgboxShow;
        private Emgu.CV.UI.ImageBox img6;
        private System.Windows.Forms.ImageList imageList1;
        private System.Windows.Forms.TextBox textBox1;
        private Emgu.CV.UI.ImageBox img5;
    }
}

